// https://www.facebook.com/embed/instantgames/YOUR_GAME_ID/player?game_url=https://localhost:8080
console.log('hello Worldf');

      FBInstant.initializeAsync()
      .then(
        function(){
          var progress = 0;
          setInterval(function(){
              progress += 3;
              FBInstant.setLoadingProgress(progress);
          }, 100);
        console.log('LOaded');
      }
      ,function(){
        console.log('Not Working');
      }
    ).catch(function(){
      console.log('Not Working 2');
    })

    FBInstant.startGameAsync()
  .then(function() {
      console.log('Hello');
  })



