class EventEmitter {
  listeners = [];
  emit(eventName, data) {
    this.listeners
      .filter(({ name }) => name === eventName)
      .forEach(
        ({ callback }) => setTimeout(
          callback.apply(this, [this, ...data]), 0
        );
      )
  }
  on(name, callback) {
    if (
      typeof callback === 'function'
      && typeof name === 'string'
    ) {
      this.listeners.push({ name, callback });
    }
  }
  off(eventName, callback) {
    this.listeners = this.listeners.filter(
      listener => !(listener.name === eventName &&
        listener.callback === callback)
    );
  }
  destroy() {
    this.listener.length = 0;
  }
}

      # Runs a single command using the runners shell
      - name: Run a one-line script
        run: echo Hello, world!

      # Runs a set of commands using the runners shell
      - name: Run a multi-line script
        run: |
          echo Add other actions to build,
          echo test, and deploy your project.
