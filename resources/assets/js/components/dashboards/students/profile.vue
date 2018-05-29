<template>
  <div class="profile">
      <div class="profile__sidebar">
          <div class="profileSidebar__header">
              <div class="avatar avatar--xl marginMagic" style="background-image: url(/images/sample.jpg);"></div>
              <div class="profileSidebarHeader__title">
                  <h3>{{namebind}}</h3>
                  <p>{{quotebind}}</p>
                  <p class="emailtitle">{{emailbind}}</p>
              </div>
          </div>
          <div class="profileSidebar__content">
              <p class="profileSidebarContent__title">My projects:</p>
              <div v-if="isHasProjects" class="profileSidebarContent__core--alter">
                <div class="projectSidebar--item">
                  <h4>Project A</h4>
                  <p>5 peoples on project</p>
                </div>
                <div class="projectSidebar--item">
                  <h4>Project B</h4>
                  <p>3 peoples on project</p>
                </div>
              </div>
              <div v-else class="profileSidebarContent__core">
                <img src="/images/nocard.svg" alt="">
                <p>You dont have any project.</p>
              </div>
          </div>
      </div>
      <div class="profile__core">
          <div class="profileCore__header">
              <h4>Account Preferences</h4>
          </div>
          <div class="profileCore__content">
              <div class="preference">
                  <div class="preference__general">
                      <h2>General</h2>
                      <section class="preference__content">
                          <fieldset class="preference__form">
                            <label for="preferencePhot">Photo</label>
                            <div id="preferencePhoto">
                              <file-pond
                                name="test"
                                ref="pond"
                                label-idle="Drop files here..."
                                allow-multiple="true"
                                accepted-file-types="image/jpeg, image/png"
                                server="/api"
                                v-bind:files="myFiles"
                                v-on:init="handleFilePondInit"/>
                            </div>
                          </fieldset>
                          <fieldset class="preference__form">
                            <label for="preferenceName">Name</label>
                            <input type="text" v-model="namebind" maxlength="30" id="preferenceName" placeholder="Fill name">
                          </fieldset>
                          <fieldset class="preference__form">
                            <label for="preferenceStatus">Quotes</label>
                            <input type="text" v-model="quotebind" maxlength="50" id="preferenceStatus" placeholder="Ar u seriously dude ? ah nvm">
                          </fieldset>
                          <fieldset class="preference__form">
                            <label for="preferenceEmail">Email address</label>
                            <input type="text" v-model="emailbind" maxlength="50" id="preferenceEmail" placeholder="Fill email address">
                          </fieldset>
                          <fieldset class="preference__form">
                            <label for="preferencePhone">Phone</label>
                            <input type="text" v-model="phonebind" maxlength="12" id="preferencePhone" v-on:keypress="isNumber(event)" placeholder="Fill your phone number here">
                          </fieldset>
                          <div class="preference__submit">
                              <button class="btn btn--primary">Save changes</button>
                          </div>
                      </section>
                  </div>
                <div class="preference__privacy">
                      <h2>Privacy</h2>
                      <section class="preference__content">
                        <fieldset class="preference__form">
                            <label for="preferencePassOld">Old password</label>
                            <input type="password" v-model="oldpassbind" id="preferencePassOld" placeholder="•••••••••••••••••">
                        </fieldset>
                        <fieldset class="preference__form">
                            <label for="preferencePassNew">New password</label>
                            <input type="password" v-model="newpassbind" id="preferencePassNew" placeholder="•••••••••••••••••">
                        </fieldset>
                      </section>
                    <div class="preference__submit">
                        <button class="btn btn--primary">Save changes</button>
                    </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import vueFilePond from 'vue-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import image preview plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview);

export default {
  data: () => ({
    isHasProjects: false,
    namebind: 'Fahmi irsyad k',
    quotebind: 'JVNX Co-founder & Front End Dev',
    emailbind: 'fahmiirsyad11@icloud.com',
    oldpassbind: '',
    newpassbind: '',
    phonebind: '',
    myFiles: []
  }),
  methods: {
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  },
  components:{
    FilePond
  }
}
</script>
