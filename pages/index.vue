<template>
  <div>
    <v-row>
      <v-col>
        <v-text-field 
          outlined
          dense
          color="green"
          type="number"
          prepend-icon="mdi-diamond-stone"
          prepend-inner-icon="mdi-diamond-stone"
          v-model="reward1"
          clearable/>
      </v-col>
    </v-row>
    <v-row v-for="(item, index) in items" :key="index">
      <v-col>
        <v-card>
          <v-card-title>
            <v-icon left large>mdi-account</v-icon>
            Member
            {{index + 1}}
            <v-spacer/>
            <v-chip
              outlined
              color="green"
              v-if="item.dividend !== null"
            >
              <v-icon left>mdi-diamond-stone</v-icon>
              {{item.dividend}}
              <v-icon right>mdi-diamond-stone</v-icon>
            </v-chip>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field 
                    type="number"
                    prepend-icon="mdi-trophy-variant"
                    label="Trophy"
                    v-model="item.score"
                    suffix="points"
                    clearable/>
                </v-col>
                <v-col>
                  <v-text-field 
                    type="number"
                    prepend-icon="mdi-format-list-checks"
                    label="Task" 
                    v-model="item.task"
                    suffix="times"
                    clearable/>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    

    <v-footer
      dark
      app
      class="py-0 px-0"
    >
      <v-container fluid>
        <v-row>
          <v-col>
            <v-card color="transparent" flat>
              <v-card-title>
                <v-icon left large>mdi-account-group</v-icon>
                Total
                <v-spacer/>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-text-field 
                        type="number"
                        prepend-icon="mdi-trophy-variant"
                        label="Trophy"
                        :value="totalScore"
                        suffix="points"
                        readonly/>
                    </v-col>
                    <v-col>
                      <v-text-field 
                        type="number"
                        prepend-icon="mdi-format-list-checks"
                        label="Task" 
                        :value="totalTask"
                        suffix="times"
                        readonly/>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Item } from '~/types/item';

export default Vue.extend({
  data() {
    return {
      reward1: Number,
      reward2: Number,
      items: [
        {
          score: null,
          task: null,
          dividend: null
        },
        {
          score: null,
          task: null,
          dividend: null
        },
        {
          score: null,
          task: null,
          dividend: null
        },
        {
          score: null,
          task: null,
          dividend: null
        },
        {
          score: null,
          task: null,
          dividend: null
        },
      ] as Item[],
    }
  },
  methods: {
    calculation(){

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

        const score = totalTask !== 0 ? 
          ((item.score ?? 0) / totalScore + (item.task ?? 0) / totalTask) / 2 :
          (item.score ?? 0) / totalScore;
        item.dividend = Math.round(score * totalScore);
      }
    }
  },
  computed: {
    totalScore: {
      get(): number {
        this.calculation();
        return this.items.reduce(function(sum:number, element:Item){
          return sum + Number(element.score ?? 0);
        }, 0);
      }
    },
    totalTask: {
      get(): number {
        this.calculation();
        return this.items.reduce(function(sum:number, element:Item){
          return sum + Number(element.task ?? 0);
      }, 0);
      }
    },
  }
});
</script>
