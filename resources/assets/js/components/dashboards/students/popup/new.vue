<template>
    <modal name="new" class="overflow-disable" transtition="nice-modal-fade" :min-width="300" :min-height="200" :adaptive="true" :reset="true" width="30%" height="auto" :clickToClose="false">
        <div class="popupContent">
            <div class="popupContent__images">
                <div class="popupClose">
                    <span @click.prevent="close">x</span>
                </div>
                <img class="img-default" src="/images/image.png" alt="our time">
                <div class="popupContent__images__dp">
                    <div class="avatar avatar--xl avatar--border-white" style="background-image: url(/images/sample.jpg);" />
                </div>
            </div>
            <div class="popupContent__desc">
                <label for="information">
                    What's new ?
                </label>
                <div id="informations">
                    <span>
                        flexible tools are designed for any project or workflow. Plan ahead, set priorities and track projects from start to finish.
                    </span>
                </div>
            </div>
            <div class="informations__button">
                <button class="btn btn--big" type="submit">More infos</button>
            </div>
        </div>
    </modal>
</template>
<script>
export default {
    methods: {
        close() {
            this.$modal.hide('new')
        }
    }
}
</script>
