package CardApi.Controller;

import CardApi.Model.Card;
import CardApi.Service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cards")
public class CardController {

    @Autowired
    private CardService service;

    @GetMapping
    public List<Card> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Card> getById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Card create(@RequestBody Card card) {
        return service.save(card);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Card> update(@PathVariable Long id, @RequestBody Card card) {
        return service.findById(id).map(existing -> {
            existing.setNome(card.getNome());
            existing.setNumero(card.getNumero());
            existing.setPosicao(card.getPosicao());
            existing.setSelecao(card.getSelecao());
            existing.setImagemUrl(card.getImagemUrl());
            return ResponseEntity.ok(service.save(existing));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        return service.findById(id).map(card -> {
            service.delete(id);
            return ResponseEntity.noContent().build();
        }).orElse(ResponseEntity.notFound().build());
    }
}
