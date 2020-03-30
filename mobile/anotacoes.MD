# DIFERENÇAS ENTRE REACT E REACT NATIVE

- O React Native não possui as tags do HTML, portanto, não há semântica. Por exemplo, todo text é um text, não existe h1, h2, etc.
- Os arquivos de css devem ter a extenção .js, não .css como de costume.

## Estilização 

- No React Native, não existe o _className_, mas sim a propriedade **styles**. Tudo que for relacionado a estilos deve estar dentro dessa propriedade.
- O display padrão no React Native é flex, portanto, não é necessário declará-lo nos estilos. Não existe display block, inline, inline-block, etc.
- As propriedades são escritas em camelCase e o conteúdo dessas propriedades deve conter aspas simples ou duplas, exceto quando é do tipo number. Exemplo: _backgroundColor: '#7159c1'_
- Não há herança de estilos, ou seja, o componente filho não herda os estilos do pai. Cada componente deve ter uma estilização própria.