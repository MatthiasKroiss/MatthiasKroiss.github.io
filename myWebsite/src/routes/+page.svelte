<script>
  import { onMount } from "svelte";
  import Typewriter from 'typewriter-effect/dist/core';
  let element;
  onMount ( async() => {
   

  new Typewriter(element, {
  strings: ['Hello', 'World!'],
  autoStart: true,
  loop: true,
    });
  })
  
</script>


<h1 bind:this={element}>Hello</h1>


<p>This is a Github page</p>
        

        <p>&#128526;  	&#128640;</p>
