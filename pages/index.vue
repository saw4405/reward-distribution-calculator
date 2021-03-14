<template>
  <div>
    <v-row>
      <v-col class="pb-0">
        <v-text-field
          outlined
          rounded
          color="cyan"
          type="number"
          prepend-inner-icon="mdi-diamond"
          v-model="reward1"
          clearable
          @change="calculate()">
        </v-text-field>
      </v-col>
      <v-col class="pb-0">
        <v-text-field
          outlined
          rounded
          color="purple"
          type="number"
          prepend-inner-icon="mdi-cards-diamond"
          v-model="reward2"
          clearable
          @change="calculate()">
        </v-text-field>
      </v-col>
    </v-row>
    <v-row dense v-for="item in items" :key="item.name">
      <v-col>
        <Card :item="item" :clearable="true" :readonly="false" :flat="false">
          <v-icon left large>mdi-account</v-icon>
        </Card>
      </v-col>
    </v-row>
    

    <v-footer
      dark
      app
      class="py-0 px-0"
    >
      <v-container fluid class="py-0">
        <v-row>
          <v-col>
            <Card :item="totalItem" :clearable="false" :readonly="true" :flat="true">
              <v-icon left large>mdi-account-group</v-icon>
            </Card>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Item } from '~/types/item';
import Card from '~/components/card.vue';

export default Vue.extend({
  components: {
    Card
  },
  data() {
    return {
      reward1: 0,
      reward2: 0,
      items: [] as Item[],
    }
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      this.items.push({name:"Member" + (i + 1), score: null, task: null, reward1: null, reward2: null});
    }
  },
  methods: {
    calculate(){

      const totalScore = this.items.reduce(function(sum:number, element:Item){
        return sum + Number(element.score ?? 0);
      }, 0);
      
      const totalTask = this.items.reduce(function(sum:number, element:Item){
          return sum + Number(element.task ?? 0);
      }, 0);

      if(totalScore === 0){
        return;
      }

      for(const item of this.items){
        if(item.score === null && item.task === null){
          continue;
        }

        const per = totalScore !== 0 && totalTask !== 0 ? 
          ((item.score ?? 0) / totalScore + (item.task ?? 0) / totalTask) / 2 :
           totalScore !== 0 ? 
          (item.score ?? 0) / totalScore :
          (item.task ?? 0) / totalTask;

        item.reward1 = this.reward1 !== null ? Math.round(this.reward1 * per) : null;
        item.reward2 = this.reward2 !== null ? Math.round(this.reward2 * per) : null;
      }
    }
  },
  computed: {
    totalItem: {
      get(): Item {
        this.calculate();

        const totalScore = this.items.reduce(function(sum:number, element:Item){
          return sum + Number(element.score ?? 0);
        }, 0);

        const totalTask = this.items.reduce(function(sum:number, element:Item){
          return sum + Number(element.task ?? 0);
        }, 0);

        return {
          name: 'Total',
          score: totalScore,
          task: totalTask,
          reward1: null,
          reward2: null
        };
      }
    },
  }
});
</script>
