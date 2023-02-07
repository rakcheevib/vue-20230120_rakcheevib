import { defineComponent } from '../vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from '../meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',

  components: {
    agendaItemIcons,
    agendaItemDefaultTitles,
  },

  agendaItemIcons:  agendaItemIcons,

  agendaItemDefaultTitles: agendaItemDefaultTitles,

  props: {
    agendaItem: {
      type: Object,
      required: true
    }
  },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">

        <img :src=" \`/assets/icons/icon-\${$options.agendaItemIcons[agendaItem.type]}.svg\`" class="icon" alt="key"/>
      </div>
      <div class="agenda-item__col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="agenda-item__col">
        <h3 v-if="agendaItem.title" class="agenda-item__title">{{ agendaItem.title }}</h3>
        <h3 v-else class="agenda-item__title">{{ $options.agendaItemDefaultTitles[agendaItem.type] }}</h3>
        <p class="agenda-item__talk">
          <span v-if="agendaItem.type === 'talk'">{{ agendaItem.speaker }}</span>
          <span v-if="agendaItem.type === 'talk'" class="agenda-item__dot"></span>
          <span v-if="agendaItem.type === 'talk'" class="agenda-item__lang">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description">{{ agendaItem.description }}</p>
      </div>
    </div>`,
});
