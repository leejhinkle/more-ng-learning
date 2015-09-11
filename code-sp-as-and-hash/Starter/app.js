window.addEventListener('hashchange', function(){
   if (window.location.hash === '#/bookmark/1'){
       console.log('Page 1 is cool');
   }
    if (window.location.hash === '#/bookmark/2'){
       console.log('Getting page two');
   }
    if (window.location.hash === '#/bookmark/3'){
       console.log('Can route to do cool stuff');
   }
});