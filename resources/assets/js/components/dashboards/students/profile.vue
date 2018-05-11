<template>
  <div class="profile">
      <div class="profile__sidebar">
          <div class="profileSidebar__header">
              <div class="avatar avatar--xl" style="background-image: url(/images/sample.jpg);"></div>
              <div class="profileSidebarHeader__title">
                  <h3>Fahmi irsyad khairi</h3>
                  <p>JVNX Co-founder & Front End Dev</p>
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
                            <input type="text" id="preferenceName" placeholder="Fill name" value="fahmi irsyad">
                          </fieldset>
                          <fieldset class="preference__form">
                            <label for="preferenceStatus">Quotes</label>
                            <input type="text" id="preferenceStatus" placeholder="Ar u seriously dude ? ah nvm" value="JVNX Co-founder & Front End Dev">
                          </fieldset>
                          <fieldset class="preference__form">
                            <label for="preferenceEmail">Email address</label>
                            <input type="text" id="preferenceEmail" placeholder="Fill email address" value="fahmiirsyad11@icloud.com">
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
