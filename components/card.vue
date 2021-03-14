<template>
  <v-card color="transparent" :flat="flat">
    <v-card-title class="pb-0">
      <slot></slot>
      {{itemValue.name}}
      <v-spacer/>

      <v-chip
        outlined
        color="cyan"
        v-if="itemValue.reward1 !== null"
      >
        <v-icon left>mdi-diamond</v-icon>
        {{itemValue.reward1}}
      </v-chip>
      <v-chip
        outlined
        color="purple"
        v-if="itemValue.reward2 !== null"
      >
        <v-icon left>mdi-cards-diamond</v-icon>
        {{itemValue.reward2}}
      </v-chip>
    </v-card-title>

    <v-card-text class="pb-0">
      <v-container>
        <v-row dense>
          <v-col>
            <v-text-field
              type="number"
              prepend-icon="mdi-trophy-variant"
              label="Trophy"
              v-model="itemValue.score"
              :clearable="clearable"
              :readonly="readonly"/>
          </v-col>
          <v-col>
            <v-text-field
              type="number"
              prepend-icon="mdi-format-list-checks"
              label="Task" 
              v-model="itemValue.task"
              :clearable="clearable"
              :readonly="readonly"/>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Item } from '~/types/item';

export default Vue.extend({
  props: {
    item: {
      type: Object as PropType<Item>,
      required: true,
    },
    flat: {
      type: Boolean
    },
    clearable: {
      type: Boolean
    },
    readonly: {
      type: Boolean
    }
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  },
  computed: {
    itemValue: {
      get(): Item {
        return this.item;
      },
      set(value: Item) {
        this.$emit('update:item', value);
      }
    },
  }
});
</script>
