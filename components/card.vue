<template>
    <v-card>
        <v-card-title>
        <v-icon left large>{{icon}}</v-icon>
        {{inputedValue.name}}
        <v-spacer/>
        </v-card-title>

        <v-card-text>
        <v-container>
            <v-row>
            <v-col>
                <v-text-field 
                type="number"
                prepend-icon="mdi-diamond-stone"
                label="Score"
                v-model="inputedValue.score"
                suffix="points"
                clearable/>
            </v-col>
            <v-col>
                <v-text-field 
                type="number"
                prepend-icon="mdi-format-list-checks"
                label="Task" 
                v-model="inputedValue.task"
                suffix="times"
                clearable/>
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
    icon: {
      type: String,
      required: true
    },
    itema: {
      type: Object as PropType<Item>,
      required: true
    },
  },
  computed: {
    inputedValue: {
      get(): Item {
        return this.item;
      },
      set(item: Item) {
        this.$emit("update:item", item);
      },
    },
  },
});
</script>
