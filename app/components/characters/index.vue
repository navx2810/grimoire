<template lang="pug">
    v-container
        v-toolbar(flat)
            v-toolbar-title Characters
            v-spacer
            v-toolbar-items
                v-btn(flat color="green") Add
        v-layout(row wrap class="mt-3")
            v-flex(xs12 class="mb-4")
                v-card
                    v-card-title(primary-title)
                        .headline Character Name
                    v-card-text
                        p Here is some info
            v-flex(xs12 class="mb-4")
                v-card
                    v-card-title(primary-title)
                        .headline Character Name
                    v-card-text
                        p Here is some info
            v-flex(xs12 class="mb-4")
                v-card
                    v-card-title(primary-title)
                        .headline Character Name
                    v-card-text
                        p Here is some info
            
                
                
</template>

<script>
export default {
    
}
</script>

