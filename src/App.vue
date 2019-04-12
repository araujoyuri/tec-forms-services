<template>
  <v-app>
    <v-toolbar app>
      <v-btn>Listar Usuários</v-btn>
      <v-btn @click="add_user = true">Adicionar Usuário</v-btn>
      <v-dialog v-model="add_user" max-width="600px">
        <add-user @close="add_user = false" />
      </v-dialog>
    </v-toolbar>

    <v-content>
      <users-view/>
    </v-content>
  </v-app>
</template>

<script>
import UsersView from './views/UsersView'
import AddUser from './components/AddUser'

export default {
  name: 'App',
  components: {
    AddUser,
    UsersView
  },
  data () {
    return {
      add_user: false
    }
  }
}
</script>
