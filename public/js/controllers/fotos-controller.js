angular
  .module("alurapic")
  .controller("FotosController", function($scope, recursoFoto) {
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
      recursoFoto.delete(
        { fotoId: foto._id },
        function() {
          var indiceFoto = $scope.fotos.indexOf(foto);
          $scope.fotos.splice(indiceFoto, 1);
          console.log("Foto " + foto.titulo + " foi removida com sucesso");
          $scope.mensagem = "Foto " + foto.titulo + " foi removida com sucesso";
        },
        function(erro) {
          console.log(erro);
          console.log("Erro ao remover a foto" + foto.titulo);
          $scope.mensagem = "Erro ao remover a foto" + foto.titulo;
        }
      );
    };
  });
