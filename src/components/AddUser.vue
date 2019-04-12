<template>
  <v-card>
    <v-container grid-list-md>
      <v-layout wrap>
        <v-flex xs12>
          <v-text-field label="Nome" v-model="user.name" required></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field label="Usuário" v-model="user.login" required></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field label="Senha" type="password" v-model="user.password" required></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field label="Verificar senha" type="password" v-model="check_password" required></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
    <v-card-actions>
      <v-btn color="error" flat @click="$emit('close')">Fechar</v-btn>
      <v-btn type="submit" color="primary" @click="registerUser" flat>Enviar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { database } from '../../utils/database'
import uuid from 'uuid'

export default {
  name: 'AddUser',
  data () {
    return {
      user: {
        id: uuid.v4(),
        name: null,
        login: null,
        password: null
      },
      check_password: null
    }
  },
  computed: {
    isPasswordMatching () {
      return this.user.password === this.check_password
    }
  },
  methods: {
    registerUser () {
      const user = database.findUser(this.user.login)
      if (this.isPasswordMatching && !user) {
        database.insertUser(this.user)
        this.$router.push('/')
        this.$emit('close')
      }
    }
  }
}
</script>

<style scoped>

</style>
