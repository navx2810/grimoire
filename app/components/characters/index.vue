<template lang="pug">
    div
        v-toolbar(flat)
            v-toolbar-title Characters
            v-spacer
            v-toolbar-items
                v-btn(flat color="green") Add
        v-container(fill-height grid-list-xl)
            v-layout(row wrap)
                v-flex(xs12 sm4)
                    v-card
                        v-card-title(primary-title)
                            .headline Character Name
                        v-card-text
                            p Here is some info
                v-flex(xs12 sm4)
                    v-card
                        v-card-title(primary-title)
                            .headline Character Name
                        v-card-text
                            p Here is some info
                v-flex(xs12 sm4)
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

