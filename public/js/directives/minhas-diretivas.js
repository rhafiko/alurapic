angular
  .module("minhasDiretivas", [])
  .directive("meuPainel", () => {
    var ddo = {};

    ddo.restrict = "AE";

    ddo.scope = {
      titulo: "@"
    };

    ddo.transclude = true;

    ddo.templateUrl = "js/directives/meu-painel.html";

    return ddo;
  })
  .directive("minhaFoto", () => {
    var ddo = {};

    ddo.restrict = "AE";

    ddo.scope = {
      titulo: "@",
      url: "@"
    };

    ddo.transclude = true;

    ddo.templateUrl = "js/directives/minha-foto.html";

    return ddo;
  })
  .directive("botaoDanger", () => {
    var ddo = {};

    ddo.restrict = "E";

    ddo.scope = {
      nome: "@",
      acao: "&"
    };

    ddo.templateUrl = "js/directives/botao-danger.html";
    return ddo;
  })
  .directive("meuFocus", () => {
    var ddo = {};

    ddo.restrict = "A";

    ddo.scope = {
      focado: "="
    };

    ddo.link = function(scope, element) {
      scope.$on("fotoCadastrada", () => {
        element[0].focus();
      });
    };

    return ddo;
  })
  .directive("meusTitulos", function() {
    var ddo = {};
    ddo.restrict = "E";
    ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';
    ddo.controller = function($scope, recursoFoto) {
      recursoFoto.query(function(fotos) {
        $scope.titulos = fotos.map(function(foto) {
          return foto.titulo;
        });
      });
    };
    return ddo;
  });
