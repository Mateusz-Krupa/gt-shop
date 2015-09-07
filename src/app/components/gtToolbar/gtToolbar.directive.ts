module gt.components {

  export function gtToolbar() {
    return {
      restrict: 'EA',
      replace: true,
      scope: {},
      templateUrl: 'app/components/gtToolbar/template/gtToolbar.html'
    };
  }

  module.directive('gtToolbar', gtToolbar);
}


