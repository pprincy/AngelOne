import Vue from 'vue';
import WatchlistsidesectionComponent from './index.vue';

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('WatchlistsidesectionComponent', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    // expect(typeof WatchlistsidesectionComponent.created).toBe('function');
  })
  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    // expect(typeof WatchlistsidesectionComponent.data).toBe('function')
    // const defaultData = WatchlistsidesectionComponent.data();
    // expect(defaultData.message).toBe('hello!');
  })
  // Inspect the component instance on mount
  it('correctly sets the message when created', () => {
    // const vm = new Vue(WatchlistsidesectionComponent).$mount();
    // expect(vm.message).toBe('bye!');
  })
  // Mount an instance and inspect the render output
  it('renders the correct message', () => {
    // const Ctor = Vue.extend(WatchlistsidesectionComponent);
    // const vm = new Ctor().$mount();
    // expect(vm.$el.textContent).toBe('bye!');
  })
})