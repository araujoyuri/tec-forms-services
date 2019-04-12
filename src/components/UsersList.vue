<template>
  <v-container grid-list-xl>
    <v-layout align-center justify-start column fill-height row wrap>
      <v-flex v-for="user in usersList" :key="user.id" md12 sm12 lg4>
        <v-card class="px-3 py-2">
          <v-responsive width="600px">
            <v-card-title>
              {{ user.name }}
            </v-card-title>
            <v-card-text>
              {{ user.login }}
            </v-card-text>
          </v-responsive>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { database } from '../../utils/database'

export default {
  name: 'UsersList',
  computed: {
    usersList () {
      return database.getUsersList()
    }
  }
}
</script>

<style scoped>

</style>
