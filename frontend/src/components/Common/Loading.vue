<template>
    <v-container fluid>
        <v-overlay v-if="overlay">
            <div>
                <v-row justify="center">
                    <h4>Please wait</h4>
                </v-row>
                <v-row justify="center">
                    <v-progress-circular
                            indeterminate
                            color="primary"
                    />
                </v-row>
            </div>
        </v-overlay>
        <div v-else>
            <div>
                <v-row justify="center">
                    <h4 v-if="text">{{text}}</h4>
                    <h4 v-if="!text">Please wait</h4>
                </v-row>
                <v-row justify="center">
                    <v-progress-circular
                            indeterminate
                            color="primary"
                    />
                </v-row>
            </div>
        </div>
    </v-container>
</template>

<script>
  export default {
    name: 'Loading',
    props: ['overlay','text']
  }
</script>

<style scoped>

</style>
