package com.senai.sistema.dto;

import com.senai.sistema.entity.Usuario;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioDTO implements Serializable {

    private Long id;
    private String nome;
    private String sobrenome;
    private String cpf;
    private String telefone;
    private String fotoPath;

    public Usuario toUsuario() {
        return new Usuario(
                this.id,
                this.nome,
                this.sobrenome,
                this.cpf,
                this.telefone,
                this.fotoPath
        );
    }

    public static UsuarioDTO fromUsuario(Usuario usuario) {
        return new UsuarioDTO(
                usuario.getId(),
                usuario.getNome(),
                usuario.getSobrenome(),
                usuario.getCpf(),
                usuario.getTelefone(),
                usuario.getFotoPath()
        );
    }
}
