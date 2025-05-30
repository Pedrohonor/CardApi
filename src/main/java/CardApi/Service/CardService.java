package CardApi.Service;

import CardApi.Model.Card;
import CardApi.Repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CardService {

    @Autowired
    private CardRepository repository;

    public List<Card> findAll() {
        return repository.findAll();
    }

    public Optional<Card> findById(Long id) {
        return repository.findById(id);
    }

    public Card save(Card card) {
        return repository.save(card);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
