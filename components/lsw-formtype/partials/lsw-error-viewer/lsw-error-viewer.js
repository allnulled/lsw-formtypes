Vue.component("LswErrorViewer", {
  template: $template,
  props: {
    error: {
      type: [Object, Boolean],
      default: () => false
    }
  },
  data() {
    this.$trace("lsw-error-viewer.data");
    return {
      currentError: undefined,
    };
  },
  methods: {
    setError(error = undefined) {
      this.$trace("lsw-error-viewer.methods.setError");
      this.currentError = error;
    },
  },
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-error-viewer.mounted");
    } catch (error) {
      console.log(error);
    }
  }
});