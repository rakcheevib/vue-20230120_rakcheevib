const { default: UiButtonGroup } = require(global.getSolutionPath('./components/UiButtonGroup'));
const { default: UiButtonGroupItem } = require(global.getSolutionPath('./components/UiButtonGroupItem'));
import { computed, defineComponent, h } from 'vue';
import { mount } from '@vue/test-utils';
import path from 'path';
import fs from 'fs/promises';
import fsSync from 'fs';

let withUnwrap;

function mountButtonGroup({ modelValue = '' } = {}) {
  // DO NOT REPEAT ON PRODUCTION =D
  if (withUnwrap === undefined) {
    const mainjsText = fsSync.readFileSync(path.join(__dirname, global.getSolutionPath('main.js')), 'utf8');
    withUnwrap = mainjsText.includes('unwrapInjectedRef');
  }

  const App = defineComponent({
    components: { UiButtonGroup, UiButtonGroupItem },
    props: ['modelValue'],
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      return {
        model: computed({
          get: () => props.modelValue,
          set: (value) => emit('update:modelValue', value),
        }),
      };
    },

    template: `
      <UiButtonGroup v-model="model">
        <UiButtonGroupItem :value="1" ref="items">One</UiButtonGroupItem>
        <UiButtonGroupItem :value="2" ref="items">Two</UiButtonGroupItem>
        <UiButtonGroupItem :value="3" ref="items">Tree</UiButtonGroupItem>
      </UiButtonGroup>
    `,
  });

  const appWrapper = mount(App, {
    props: { modelValue },
    global: {
      config: {
        unwrapInjectedRef: withUnwrap,
      },
    },
  });

  return {
    appWrapper,
    buttonGroup: appWrapper.getComponent(UiButtonGroup),
    buttonGroupItems: appWrapper.findAllComponents(UiButtonGroupItem),
  };
}

describe('provide-inject/UiButtonGroup-provide', () => {
  describe('UiButtonGroup', () => {
    it('UiButtonGroup должен использовать provide в решении', async () => {
      const solutionText = await fs.readFile(
        path.join(__dirname, global.getSolutionPath('components/UiButtonGroup.vue')),
        'utf8',
      );
      expect(solutionText).toMatch(/provide/);
    });

    it('UiButtonGroupItem должен рендерить кнопку button.button-group__button с переданным содержимым', async () => {
      const { buttonGroupItems } = mountButtonGroup();
      expect(buttonGroupItems).toHaveLength(3);
      expect(buttonGroupItems[0].element.tagName).toBe('BUTTON');
      expect(buttonGroupItems[0].classes()).toContain('button-group__button');
      expect(buttonGroupItems[0].text()).toContain('One');
    });

    it('UiButtonGroupItem должен быть активным с классом button-group__button_active только, если его value совпадает со значением родительского UiButtonGroup', async () => {
      const { buttonGroupItems } = mountButtonGroup({ modelValue: 2 });
      expect(buttonGroupItems[0].classes('button-group__button_active')).toBeFalsy();
      expect(buttonGroupItems[1].classes('button-group__button_active')).toBeTruthy();
      expect(buttonGroupItems[2].classes('button-group__button_active')).toBeFalsy();
    });

    it('UiButtonGroupItem должен обновлять состояние активности в соответствии с обновлением значения модели родительского UiButtonGroup', async () => {
      const { appWrapper, buttonGroupItems } = mountButtonGroup({ modelValue: 1 });
      await appWrapper.setProps({ modelValue: 2 });
      expect(buttonGroupItems[0].classes('button-group__button_active')).toBeFalsy();
      expect(buttonGroupItems[1].classes('button-group__button_active')).toBeTruthy();
      expect(buttonGroupItems[2].classes('button-group__button_active')).toBeFalsy();
    });

    it('UiButtonGroupItem должен инициировать порождение события обновления модели родительским UiButtonGroup со своим value по клику', async () => {
      const { buttonGroupItems, buttonGroup } = mountButtonGroup({ modelValue: 1 });
      await buttonGroupItems[2].trigger('click');
      expect(buttonGroup.emitted('update:modelValue')).toBeDefined();
      expect(buttonGroup.emitted('update:modelValue')).toHaveLength(1);
      expect(buttonGroup.emitted('update:modelValue')[0]).toEqual([3]);
    });
  });
});
