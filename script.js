document.getElementById('addNoteBtn').addEventListener('click', function() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value.trim();
    
    if (noteText === '') {
        alert('Digite uma nota antes de adicionar.');
        return;
    }
    
    // Criar o item de nota
    const li = document.createElement('li');
    li.textContent = noteText;
    
    // Criar o botão de excluir
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Excluir';
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
    
    // Adicionar o botão ao item da lista
    li.appendChild(deleteBtn);
    
    // Adicionar o item à lista de notas
    document.getElementById('notesList').appendChild(li);
    
    // Limpar o campo de entrada
    noteInput.value = '';
});
