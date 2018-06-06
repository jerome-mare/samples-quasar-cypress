<template>
  <q-page>
    <div
      class="my-selects"
    >
      <select id="html-select">
        <option value="valeur1">Valeur 1</option>
        <option value="valeur2">Valeur 2</option>
        <option value="valeur3" selected>Valeur 3</option>
      </select>

      <h3>Selected option</h3>
      <div class="my-single-select-value">{{select}}</div>
      <!-- Single Selection using Radios -->
      <q-select
        v-model="select"
        :options="selectOptions"
        class="q-select-single-radios"
        float-label="Is Quasar Awesome?"
        radio
      />

      <!-- Single Selection as a simple List -->
      <q-select
        v-model="select"
        :options="selectOptions"
        class="q-select-single-list"
      />

      <!-- Multiple Selection using Checkboxes by default -->
      <q-select
        v-model="multipleSelect"
        :options="selectOptions"
        class="q-select-multiple-checkboxes"
        multiple
      />

      <!-- Multiple Selection using Toggles -->
      <q-select
        v-model="multipleSelect"
        :options="selectOptions"
        class="q-select-multiple-toggles"
        toggle
        multiple
      />
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      select: '',
      multipleSelect: [],
      selectOptions: [
        {
          label: 'Google',
          value: 'goog'
        },
        {
          label: 'Facebook',
          value: 'fb'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.my-selects
  width 80%
  margin-left auto
  margin-right auto

select
  margin-top 50px

.q-select
  padding-top 50px
</style>
