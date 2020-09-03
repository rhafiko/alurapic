angular
  .module("meusServicos", ["ngResource"])
  .factory("recursoFoto", function($resource) {
    return $resource("v1/fotos/:fotoId", null, {
      update: {
        method: "PUT"
      },
      save: {
        method: "POST"
      }
    });
  })
  .factory("cadastroDeFotos", function(recursoFoto, $q) {
    var servico = {};
    servico.cadastrar = function(foto) {
      return $q(function(resolve, reject) {
        if (foto._id) {
          recursoFoto.update(
            { fotoId: foto._id },
            foto,
            function() {
              resolve({
                mensagem: "Foto " + foto.titulo + " atualizada com sucesso!",
                inclusao: false
              });
            },
            function(erro) {
              console.log(erro);
              reject({
                mensagem: "Não foi possível alterar a foto " + foto.titulo
              });
            }
          );
        } else {
          recursoFoto.save(
            foto,
            function() {
              resolve({
                mensagem: "Foto " + foto.titulo + " incluída com sucesso!",
                inclusao: true
              });
            },
            function(erro) {
              console.log(erro);
              reject({
                mensagem: "Não foi possível incluir a foto " + foto.titulo
              });
            }
          );
        }
      });
    };

    return servico;
  })
  .factory("remocaoDeFotos", function(recursoFoto, $q) {
    var servico = {};
    servico.remover = function(foto) {
      return $q(function(resolve, reject) {
        recursoFoto.delete(
          { fotoId: foto._id },
          function() {
            resolve({
              mensagem: "Foto " + foto.titulo + " foi removida com sucesso"
            });
          },
          function(erro) {
            console.log(erro);
            reject({
              mensagem: "Erro ao remover a foto" + foto.titulo
            });
          }
        );
      });
    };
    return servico;
  });
