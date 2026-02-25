import React, { useEffect, useRef } from 'react';

const AdsterraNative = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    if (bannerRef.current && !bannerRef.current.firstChild) {
      
      const conf = document.createElement('script');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `//www.highperformancecpm.com/YOUR_ZONE_ID/invoke.js`; // 👈 LINK YAHAN
      
      // 👇👇 YAHAN APNA ZONE ID (KEY) DALEIN 👇👇
        const zoneId = <script>
  atOptions = {
    'key' : 'd97d21d2e76ab0b73d6406ca75874e16',
    'format' : 'iframe',
    'height' : 50,
    'width' : 320,
    'params' : {}
  };
</script>
<script src="https://www.highperformanceformat.com/d97d21d2e76ab0b73d6406ca75874e16/invoke.js"></script>
      conf.innerHTML = `atOptions = { 'key' : '${zoneId}', 'format' : 'iframe', 'height' : ${height}, 'width' : ${width}, 'params' : {} };`;

      bannerRef.current.appendChild(conf);
      bannerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div 
      ref={bannerRef} 
      className="flex justify-center my-4 overflow-hidden"
    >
    </div>
  );
};

export default AdsterraNative;
