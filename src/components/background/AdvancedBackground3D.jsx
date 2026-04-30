import React, { useRef, useEffect } from 'react';

const AdvancedBackground3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false }); 
    
    let width, height;
    let animationFrameId;
    let time = 0;

    // Mouse interaction coordinates
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / width) - 0.5;
      mouseY = (e.clientY / height) - 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 3D Math Utility Functions (Projection Matrix simulation)
    const project3D = (x, y, z, fov, viewDist) => {
      const scale = fov / (fov + z + viewDist);
      return {
        x: (x * scale) + (width / 2),
        y: (y * scale) + (height / 2),
        scale: scale,
        depth: z
      };
    };

    const rotateX = (x, y, z, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return { x: x, y: y * cos - z * sin, z: y * sin + z * cos };
    };

    const rotateY = (x, y, z, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return { x: x * cos + z * sin, y: y, z: -x * sin + z * cos };
    };

    const rotateZ = (x, y, z, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return { x: x * cos - y * sin, y: x * sin + y * cos, z: z };
    };

    // --- Entity 1: Wireframe Terrain Grid ---
    const terrainSize = 2500;
    const resolution = 15; 
    let grid = [];
    
    const initTerrain = () => {
      grid = [];
      const halfSize = terrainSize / 2;
      for (let z = -halfSize; z <= halfSize; z += terrainSize / resolution) {
        let row = [];
        for (let x = -halfSize; x <= halfSize; x += terrainSize / resolution) {
          let y = Math.sin(x * 0.002) * Math.cos(z * 0.002) * 150 + Math.sin(x * 0.005) * 50;
          row.push({ ox: x, oy: y, oz: z, x: x, y: y, z: z });
        }
        grid.push(row);
      }
    };
    initTerrain();

    // --- Entity 2: Data Particle Network ---
    let particles = [];
    const numParticles = 150;
    
    class Particle3D {
      constructor() {
        this.reset();
        this.z = Math.random() * 2000 - 1000; 
      }
      reset() {
        this.x = (Math.random() - 0.5) * 4000;
        this.y = (Math.random() - 0.5) * 4000;
        this.z = 2000; 
        this.speed = Math.random() * 2 + 1;
        this.radius = Math.random() * 1.5 + 0.5;
        this.baseRotX = Math.random() * Math.PI * 2;
        this.baseRotY = Math.random() * Math.PI * 2;
      }
      update(globalRotX, globalRotY) {
        this.z -= this.speed;
        let rotated = rotateY(this.x, this.y, this.z, globalRotY);
        rotated = rotateX(rotated.x, rotated.y, rotated.z, globalRotX);
        
        this.dx = rotated.x;
        this.dy = rotated.y;
        this.dz = rotated.z;

        if (this.z < -1000) this.reset(); 
      }
    }

    for (let i = 0; i < numParticles; i++) particles.push(new Particle3D());

    // --- Entity 3: Floating Geometric Prisms (Tech feel) ---
    const shapes = [];
    const createCube = (size, cx, cy, cz) => {
      const s = size / 2;
      return {
        cx, cy, cz,
        rotX: Math.random() * Math.PI, rotY: Math.random() * Math.PI, rotZ: Math.random() * Math.PI,
        spinX: (Math.random() - 0.5) * 0.02, spinY: (Math.random() - 0.5) * 0.02, spinZ: (Math.random() - 0.5) * 0.02,
        vertices: [
          [-s, -s, -s], [s, -s, -s], [s, s, -s], [-s, s, -s],
          [-s, -s, s], [s, -s, s], [s, s, s], [-s, s, s]
        ],
        edges: [
          [0,1], [1,2], [2,3], [3,0],
          [4,5], [5,6], [6,7], [7,4],
          [0,4], [1,5], [2,6], [3,7]
        ]
      };
    };
    
    for(let i=0; i<5; i++) {
      shapes.push(createCube(
        Math.random() * 100 + 50, 
        (Math.random() - 0.5) * 1500, 
        (Math.random() - 0.5) * 1500, 
        Math.random() * 1000
      ));
    }

    // --- Entity 4: Floating Data Orbs (New addition for aesthetic complexity) ---
    const orbs = [];
    for(let i=0; i<15; i++) {
      orbs.push({
        x: (Math.random() - 0.5) * 2000,
        y: (Math.random() - 0.5) * 2000,
        z: Math.random() * 2000,
        speed: Math.random() * 3 + 1,
        radius: Math.random() * 3 + 2,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }

    // --- Main Render Loop (Light Theme Tuned) ---
    const render = () => {
      time += 0.01;
      
      // Clear with Clean Pearl White / Slate 50 background
      ctx.fillStyle = '#f8fafc'; // tailwind slate-50
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse target rotation
      targetRotY += (mouseX * 0.05 - targetRotY) * 0.1;
      targetRotX += (mouseY * 0.05 - targetRotX) * 0.1;

      // 1. Draw Star/Particle Network (Indigo hues for light background)
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update(targetRotX, targetRotY);
        const proj1 = project3D(p1.dx, p1.dy, p1.dz, 800, 1000);
        
        const alpha = Math.max(0, Math.min(1, 1 - (p1.dz / 2000)));
        
        if (proj1.scale > 0 && proj1.x > 0 && proj1.x < width && proj1.y > 0 && proj1.y < height) {
          ctx.beginPath();
          ctx.arc(proj1.x, proj1.y, p1.radius * proj1.scale * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(79, 70, 229, ${alpha})`; // Indigo 600
          ctx.fill();
        }

        // Connect nearby particles to form constellations
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distSq = (p1.dx - p2.dx)**2 + (p1.dy - p2.dy)**2 + (p1.dz - p2.dz)**2;
          if (distSq < 80000) {
             const proj2 = project3D(p2.dx, p2.dy, p2.dz, 800, 1000);
             if(proj1.scale > 0 && proj2.scale > 0) {
               const connectionIntensity = 1 - (distSq / 80000);
               ctx.beginPath();
               ctx.moveTo(proj1.x, proj1.y);
               ctx.lineTo(proj2.x, proj2.y);
               ctx.strokeStyle = `rgba(20, 184, 166, ${alpha * connectionIntensity * 0.4})`; // Teal 500
               ctx.stroke();
             }
          }
        }
      }

      // 1.5 Draw Data Orbs (Amber/Gold accents on light mode)
      orbs.forEach(orb => {
        orb.z -= orb.speed;
        if(orb.z < -1000) {
            orb.z = 2000;
            orb.x = (Math.random() - 0.5) * 2000;
            orb.y = (Math.random() - 0.5) * 2000;
        }
        let rot = rotateY(orb.x, orb.y, orb.z, targetRotY);
        rot = rotateX(rot.x, rot.y, rot.z, targetRotX);
        const proj = project3D(rot.x, rot.y, rot.z, 800, 1000);
        
        if (proj.scale > 0 && proj.x > 0 && proj.x < width && proj.y > 0 && proj.y < height) {
          const pulse = (Math.sin(time * 5 + orb.pulseOffset) + 1) / 2; // 0 to 1
          const alpha = Math.max(0, Math.min(1, 1 - (orb.z / 2000))) * pulse;
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, orb.radius * proj.scale * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(245, 158, 11, ${alpha})`; // Amber 500
          ctx.fill();
        }
      });

      // 2. Draw Floating Geometry Prisms
      shapes.forEach(shape => {
        shape.rotX += shape.spinX;
        shape.rotY += shape.spinY;
        shape.rotZ += shape.spinZ;

        shape.cz -= 1;
        if(shape.cz < -500) {
           shape.cz = 2000;
           shape.cx = (Math.random() - 0.5) * 1500;
           shape.cy = (Math.random() - 0.5) * 1500;
        }

        const projVertices = shape.vertices.map(v => {
          let rot = rotateX(v[0], v[1], v[2], shape.rotX);
          rot = rotateY(rot.x, rot.y, rot.z, shape.rotY);
          rot = rotateZ(rot.x, rot.y, rot.z, shape.rotZ);
          let glob = rotateY(rot.x + shape.cx, rot.y + shape.cy, rot.z + shape.cz, targetRotY);
          glob = rotateX(glob.x, glob.y, glob.z, targetRotX);
          return project3D(glob.x, glob.y, glob.z, 800, 1000);
        });

        const alpha = Math.max(0, Math.min(1, 1 - ((shape.cz - 500) / 1500)));
        ctx.strokeStyle = `rgba(79, 70, 229, ${alpha * 0.6})`; // Indigo 600
        ctx.lineWidth = 1.5;

        shape.edges.forEach(edge => {
          const p1 = projVertices[edge[0]];
          const p2 = projVertices[edge[1]];
          if (p1.scale > 0 && p2.scale > 0) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      // 3. Draw Clean Data Wireframe Terrain at the bottom
      const terrainOffset = (time * 150) % (terrainSize / resolution); 
      
      for (let z = 0; z < grid.length - 1; z++) {
        for (let x = 0; x < grid[z].length - 1; x++) {
          
          let p1 = grid[z][x];
          let p2 = grid[z][x+1];
          let p3 = grid[z+1][x];
          let p4 = grid[z+1][x+1];

          p1.y = p1.oy + Math.sin(time + p1.x * 0.01) * 30;
          p2.y = p2.oy + Math.sin(time + p2.x * 0.01) * 30;
          p3.y = p3.oy + Math.sin(time + p3.x * 0.01) * 30;
          p4.y = p4.oy + Math.sin(time + p4.x * 0.01) * 30;

          const transform = (p) => {
            let tx = p.x;
            let ty = p.y + 400; 
            let tz = p.z - terrainOffset; 
            if (tz < -terrainSize/2) tz += terrainSize;
            
            let rot = rotateY(tx, ty, tz, targetRotY);
            rot = rotateX(rot.x, rot.y, rot.z, targetRotX + 0.2); 
            return project3D(rot.x, rot.y, rot.z, 800, 1000);
          };

          const proj1 = transform(p1);
          const proj2 = transform(p2);
          const proj3 = transform(p3);
          const proj4 = transform(p4);

          const dist = (p1.z + terrainSize/2) / terrainSize; 
          const alpha = Math.max(0, Math.min(0.2, dist * 0.4));

          if (proj1.scale > 0 && proj2.scale > 0 && proj3.scale > 0) {
            ctx.strokeStyle = `rgba(203, 213, 225, ${alpha * 2})`; // Slate 300 for wireframe grid
            ctx.lineWidth = 1;
            
            ctx.beginPath();
            ctx.moveTo(proj1.x, proj1.y);
            ctx.lineTo(proj2.x, proj2.y);
            ctx.lineTo(proj4.x, proj4.y);
            ctx.lineTo(proj3.x, proj3.y);
            ctx.closePath();
            ctx.stroke();

            // We fill it with pure white to give it an architectural model look
            if (alpha > 0.05) {
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 4})`; 
                ctx.fill();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: '#f8fafc' }} 
    />
  );
};

export default AdvancedBackground3D;