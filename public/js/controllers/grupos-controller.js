angular
  .module("alurapic")
  .controller("GruposController", function($scope, $resource) {
    $scope.grupos = [];
    var recursoGrupos = $resource("v1/grupos/:grupoId");

    recursoGrupos.query(
      function(retorno) {
        console.log(retorno);
        $scope.grupos = retorno;
      },
      function(erro) {
        console.log(erro);
      }
    );
  });
