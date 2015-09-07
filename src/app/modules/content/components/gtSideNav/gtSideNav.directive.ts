module gt.content {

  export function gtNavbar() {
    return {
      restrict: 'EA',
      transclude: true,
      scope: {},
      controller: 'gtSideNavController',
      controllerAs: 'vm',
      templateUrl: 'app/modules/content/components/gtSideNav/template/gtSideNav.html'
    };
  }

  module.directive('gtSideNav', gtNavbar);
}


