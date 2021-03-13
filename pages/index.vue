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
    <v-row dense v-for="(item, index) in items" :key="index">
      <v-col>
        <v-card>
          <v-card-title class="pb-0">
            <v-icon left large>mdi-account</v-icon>
            Member
            {{index + 1}}
            <v-spacer/>
            <v-chip
              outlined
              color="cyan"
              v-if="item.reward1 !== null"
            >
              <v-icon left>mdi-diamond</v-icon>
              {{item.reward1}}
            </v-chip>
            <v-chip
              outlined
              color="purple"
              v-if="item.reward2 !== null"
            >
              <v-icon left>mdi-cards-diamond</v-icon>
              {{item.reward2}}
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
                    v-model="item.score"
                    clearable/>
                </v-col>
                <v-col>
                  <v-text-field
                    type="number"
                    prepend-icon="mdi-format-list-checks"
                    label="Task" 
                    v-model="item.task"
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
      <v-container fluid class="py-0">
        <v-row>
          <v-col>
            <v-card color="transparent" flat>
              <v-card-title class="pb-0">
                <v-icon left large>mdi-account-group</v-icon>
                Total
                <v-spacer/>
              </v-card-title>

              <v-card-text class="pb-0">
                <v-container>
                  <v-row dense>
                    <v-col>
                      <v-text-field 
                        type="number"
                        prepend-icon="mdi-trophy-variant"
                        label="Trophy"
                        :value="totalScore"
                        readonly/>
                    </v-col>
                    <v-col>
                      <v-text-field 
                        type="number"
                        prepend-icon="mdi-format-list-checks"
                        label="Task" 
                        :value="totalTask"
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
      reward1: 0,
      reward2: 0,
      items: [] as Item[],
    }
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      this.items.push({score: null, task: null, reward1:null, reward2:null});
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
    totalScore: {
      get(): number {
        this.calculate();
        return this.items.reduce(function(sum:number, element:Item){
          return sum + Number(element.score ?? 0);
        }, 0);
      }
    },
    totalTask: {
      get(): number {
        this.calculate();
        return this.items.reduce(function(sum:number, element:Item){
          return sum + Number(element.task ?? 0);
      }, 0);
      }
    },
  }
});
</script>
