// Dans Node.js
globalThis.globalScopeVar = 'globalScopeVar';
const moduleScopeVar = 'moduleScopeVar';

function externe() {
  const closureScopeVar = 'functionScopeVar';

  function interne() {
    const localScopeVar = 'localScopeVar';

    if (true) {
      const blockScopeVar = 'blockScopeVar';
      console.log(blockScopeVar);
      console.log(localScopeVar);
      console.log(closureScopeVar);
      console.log(moduleScopeVar); // closure
      console.log(globalScopeVar);
    }

    // breakpoint
  }

  interne()

}

externe();
