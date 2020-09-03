angular
  .module("alurapic")
  .controller("FotosController", function($scope, recursoFoto, remocaoDeFotos) {
    $scope.fotos = [];
    $scope.filtro = "";
    $scope.mensagem = "";

    recursoFoto.query(
      function(retorno) {
        $scope.fotos = retorno;
      },
      function(erro) {
        console.log(erro);
      }
    );

    $scope.remover = function(foto) {
      remocaoDeFotos
        .remover(foto)
        .then(retorno => {
          var indiceFoto = $scope.fotos.indexOf(foto);
          $scope.fotos.splice(indiceFoto, 1);
          $scope.mensagem = retorno.mensagem;
        })
        .catch(erro => {
          $scope.mensagem = erro.mensagem;
        });
    };
  });
