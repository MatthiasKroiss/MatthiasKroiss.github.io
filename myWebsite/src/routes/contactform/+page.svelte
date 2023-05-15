<script>
import emailjs from '@emailjs/browser';


let form;


function sendmail(){
    emailjs.sendForm('gmx', 'template_5sq19rg', form, 'q78RxbcNIVwlXus-V')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

    form.reset();
    


}

</script>

<h1>
    Kontaktformular</h1>

    
<h2 class="p-3">Nehmen Sie Kontakt mit mir auf</h2>


<div class="p-4 justify-content-center">
    <div class="p-2">
        <form bind:this={form} on:submit={sendmail}>
            <div class="row mb-3">
                <div class="col input-group">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="email" class="form-control" id="email" name="email" placeholder="Email" required>
                </div>

                <div class="col input-group">
                    <span class="input-group-text" id="basic-addon1">Vor- und Nachname</span>
                    <input type="text" class="form-control" id="name" name="name" required placeholder="Name">
                </div>
            </div>
            <div class="mb-3">
                <textarea class="form-control" id="issue" name="message" required
                          placeholder="Ihr Anliegen an mich"></textarea>
            </div>
            <div class="mb-4 input-group">
                <span class="input-group-text">In welche Kategorie fällt ihr Anliegen</span>
                <select class="form-select form-select-sm " aria-label=".form-select-sm example" name="category">
                    <option selected value="business">Beruflich</option>
                    <option value="private">Privat</option>
                    <option value="someting different">Anderes</option>
                </select>
            </div>


            <button type="submit" class="btn btn-outline-primary bi-send btnMyColor">Senden</button>
        </form>

        
        <div class="modal fade" id="sentModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modalDialogDark">
              <div class="modal-content modalDark">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Gesendet!</h1>
                </div>
                <div class="modal-body">
                  <div></div>Ich antworte so schnell wie möglich.
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btnMyColor" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
      
    


          
          
          
    </div>
</div>
