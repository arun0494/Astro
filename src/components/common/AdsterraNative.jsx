import React, { useEffect, useRef } from 'react';

const AdsterraNative = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    if (bannerRef.current && !bannerRef.current.firstChild) {
      
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.setAttribute('data-cfasync', 'false');

      <script>
  atOptions = {
    'key' : 'd97d21d2e76ab0b73d6406ca75874e16',
    'format' : 'iframe',
    'height' : 50,
    'width' : 320,
    'params' : {}
  };
</script>
<script src="https://www.highperformanceformat.com/d97d21d2e76ab0b73d6406ca75874e16/invoke.js"></script>

      bannerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div 
      ref={bannerRef} 
      className="w-full my-4 flex justify-center items-center min-h-[100px] bg-white/5 rounded-xl border border-white/5 overflow-hidden"
    >
    </div>
  );
};

export default AdsterraNative;
