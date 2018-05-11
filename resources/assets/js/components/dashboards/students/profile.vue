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
                            <div id="preferencePhoto"></div>
                          </fieldset>
                          <fieldset class="preference__form">
                            <label for="preferenceName">Name</label>
                            <input type="text" v-model="namebind" id="preferenceName" placeholder="Fill name">
                          </fieldset>
                          <fieldset class="preference__form">
                            <label for="preferenceStatus">Quotes</label>
                            <input type="text" v-model="quotebind" id="preferenceStatus" placeholder="Ar u seriously dude ? ah nvm">
                          </fieldset>
                          <fieldset class="preference__form">
                            <label for="preferenceEmail">Email address</label>
                            <input type="text" v-model="emailbind" id="preferenceEmail" placeholder="Fill email address">
                          </fieldset>
                      </section>
                  </div>
                <div class="preference__privacy">
                      <h2>Privacy</h2>
                      <section class="preference__content">
                          <p>privacy setting </p>
                      </section>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    namebind: 'Fahmi irsyad k',
    quotebind: 'JVNX Co-founder & Front End Dev',
    emailbind: 'fahmiirsyad11@icloud.com'
  })
}
</script>
