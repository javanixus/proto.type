<template>
    <modal name="menu-profile"  classes="nice-modal" class="overflow-disable" :pivotX="0.971" :pivotY="0.14" transtition="nice-modal-fade" :min-width="270" :min-height="200" :adaptive="true" :reset="true" width="200px" height="auto" :clickToClose="true">
        <div class="menuProfile">
            <div class="menuProfile__header">
                <h5>Fahmi irsyad k</h5>
                <p>fahmiirsyad10@gmail.com</p>
            </div>
            <div class="menuProfile__content">
                <ul>
                    <li><router-link :to="{name: 'studentprofile'}">Account Preferences</router-link></li>
                    <li><a href="">Settings</a></li>
                    <li><a href="">Support</a></li>
                    <li><a href="">Logout</a></li>
                </ul>
            </div>
        </div>
    </modal>
</template>
<script>
export default {
  
}
</script>
