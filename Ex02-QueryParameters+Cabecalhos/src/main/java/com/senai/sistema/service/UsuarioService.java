package com.senai.sistema.service;

import com.senai.sistema.dto.UsuarioDTO;
import com.senai.sistema.entity.Usuario;
import com.senai.sistema.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Usuario> getAllUsers() {
        return usuarioRepository.findAll();
    }

    public UsuarioDTO createUser(UsuarioDTO usuarioDTO) {
        Usuario usuario = usuarioDTO.toUsuario();
        Usuario savedUsuario = usuarioRepository.save(usuario);
        return UsuarioDTO.fromUsuario(savedUsuario);
    }

    public Optional<UsuarioDTO> updateUser(Long id, UsuarioDTO usuarioDTO) {
        Optional<Usuario> usuarioOptional = usuarioRepository.findById(id);
        if (usuarioOptional.isPresent()) {
            Usuario usuario = usuarioOptional.get();
            usuario.setNome(usuarioDTO.getNome());
            usuario.setSobrenome(usuarioDTO.getSobrenome());
            usuario.setCpf(usuarioDTO.getCpf());
            usuario.setTelefone(usuarioDTO.getTelefone());
            usuario.setFotoPath(usuarioDTO.getFotoPath());
            Usuario updatedUsuario = usuarioRepository.save(usuario);
            return Optional.of(UsuarioDTO.fromUsuario(updatedUsuario));
        }
        return Optional.empty();
    }

    public boolean deleteUser(Long id) {
        if (usuarioRepository.existsById(id)) {
            usuarioRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
