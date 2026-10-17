window.QUIZ = {
  id: 'sciences1',
  titre: 'Sciences : l\'alimentation',
  questions: [
    { question: 'Combien y a-t-il d\'origines différentes pour les aliments ?', multiple: false,
      options: ['2', '3', '4', '5'], reponses: ['3'],
      explication: 'Les aliments ont 3 origines : animale, végétale et minérale.', lecon: '1. Les 3 origines des aliments' },

    { question: 'Quelle est l\'origine de la viande ?', multiple: false,
      options: ['Animale', 'Végétale', 'Minérale', 'Transformée'], reponses: ['Animale'],
      explication: 'La viande, le poisson, les œufs et le lait viennent d\'animaux.', lecon: '1. Les 3 origines des aliments' },

    { question: 'Trouve tous les aliments d\'origine végétale.', multiple: true,
      options: ['Carotte', 'Œuf', 'Pomme', 'Poisson', 'Céréales', 'Yaourt'],
      reponses: ['Carotte', 'Pomme', 'Céréales'],
      explication: 'Les fruits, les légumes et les céréales sont d\'origine végétale.', lecon: '1. Les 3 origines des aliments' },

    { question: 'L\'eau et le sel ont une origine…', multiple: false,
      options: ['Minérale', 'Animale', 'Végétale', 'Transformée'], reponses: ['Minérale'],
      explication: 'L\'eau et le sel sont d\'origine minérale.', lecon: '1. Les 3 origines des aliments' },

    { question: 'Quel est l\'intrus ? (Cherche celui qui n\'est pas d\'origine animale)', multiple: false,
      options: ['Lait', 'Poulet', 'Œuf', 'Haricots verts'], reponses: ['Haricots verts'],
      explication: 'Les haricots verts sont des légumes : leur origine est végétale.', lecon: '1. Les 3 origines des aliments' },

    { question: 'Quel est le rôle des fruits et des légumes ?', multiple: false,
      options: ['Ils protègent le corps', 'Ils font grandir', 'Ils donnent de l\'énergie', 'Ils remplacent l\'eau'],
      reponses: ['Ils protègent le corps'],
      explication: 'Les fruits et légumes sont des aliments protecteurs.', lecon: '3. Les 3 rôles des aliments' },

    { question: 'Trouve les aliments bâtisseurs (qui aident à grandir).', multiple: true,
      options: ['Poisson', 'Beurre', 'Œuf', 'Lait', 'Sucre', 'Pâtes'],
      reponses: ['Poisson', 'Œuf', 'Lait'],
      explication: 'Viandes, poissons, œufs et produits laitiers sont bâtisseurs. Le beurre, le sucre et les pâtes donnent de l\'énergie.', lecon: '3. Les 3 rôles des aliments' },

    { question: 'Les pâtes, le pain et le riz sont des féculents. Quel est leur rôle ?', multiple: false,
      options: ['Bâtisseur', 'Protecteur', 'Énergétique', 'Aucun rôle'], reponses: ['Énergétique'],
      explication: 'Les féculents, les matières grasses et les produits sucrés donnent de l\'énergie.', lecon: '3. Les 3 rôles des aliments' },

    { question: 'Le lait de noisette est-il transformé ?', multiple: false,
      options: ['Oui, il est végétal et transformé', 'Non, il est animal', 'Non, il est minéral', 'Oui, il est animal et transformé'],
      reponses: ['Oui, il est végétal et transformé'],
      explication: 'Le lait de noisette vient d\'un végétal (la noisette) et il a subi une transformation.', lecon: '2. Les aliments transformés' },

    { question: 'Trouve tous les aliments transformés.', multiple: true,
      options: ['Confiture de fraise', 'Carotte', 'Fromage de chèvre', 'Œuf', 'Thon en conserve', 'Thon entier'],
      reponses: ['Confiture de fraise', 'Fromage de chèvre', 'Thon en conserve'],
      explication: 'La confiture, le fromage et le thon en conserve ont été transformés. La carotte, l\'œuf et le thon entier ne le sont pas.', lecon: '2. Les aliments transformés' },

    { question: 'La confiture de fraise : quelle est son origine ?', multiple: false,
      options: ['Animale', 'Minérale', 'Végétale', 'Aucune'], reponses: ['Végétale'],
      explication: 'Les fraises sont des fruits : origine végétale. La confiture est en plus transformée.', lecon: '2. Les aliments transformés' },

    { question: 'Le thon entier et le thon en conserve : quelle est la différence ?', multiple: false,
      options: ['Le thon en conserve est transformé, pas le thon entier', 'Le thon entier est transformé, pas la conserve', 'Ils sont tous les deux transformés', 'Ils sont tous les deux d\'origine végétale'],
      reponses: ['Le thon en conserve est transformé, pas le thon entier'],
      explication: 'Les deux sont d\'origine animale, mais seule la conserve a été transformée.', lecon: '2. Les aliments transformés' },

    { question: 'Combien y a-t-il d\'organes dans l\'appareil digestif à connaître ?', multiple: false,
      options: ['3', '4', '5', '8'], reponses: ['5'],
      explication: 'Les 5 organes : la bouche, l\'œsophage, l\'estomac, l\'intestin grêle, le gros intestin.', lecon: '4. Les 5 organes de l\'appareil digestif' },

    { question: 'Quel organe vient juste après la bouche ?', multiple: false,
      options: ['L\'estomac', 'L\'œsophage', 'L\'intestin grêle', 'Le gros intestin'], reponses: ['L\'œsophage'],
      explication: 'Les aliments passent de la bouche à l\'œsophage, puis à l\'estomac.', lecon: '4. Les 5 organes de l\'appareil digestif' },

    { question: 'Trouve les 5 organes de l\'appareil digestif.', multiple: true,
      options: ['Bouche', 'Œsophage', 'Poumon', 'Estomac', 'Intestin grêle', 'Gros intestin', 'Cœur'],
      reponses: ['Bouche', 'Œsophage', 'Estomac', 'Intestin grêle', 'Gros intestin'],
      explication: 'Le poumon et le cœur ne sont pas dans l\'appareil digestif.', lecon: '4. Les 5 organes de l\'appareil digestif' },

    { question: 'Dans quel organe les aliments sont-ils broyés par les dents et transformés par la salive ?', multiple: false,
      options: ['L\'estomac', 'La bouche', 'L\'œsophage', 'Le gros intestin'], reponses: ['La bouche'],
      explication: 'Dans la bouche, les dents broient les aliments et la salive commence à les transformer.', lecon: '4. Les 5 organes de l\'appareil digestif' },

    { question: 'Quel organe malaxe les aliments avec le suc gastrique ?', multiple: false,
      options: ['L\'estomac', 'L\'œsophage', 'La bouche', 'Le gros intestin'], reponses: ['L\'estomac'],
      explication: 'L\'estomac malaxe les aliments et le suc gastrique les transforme.', lecon: '4. Les 5 organes de l\'appareil digestif' },

    { question: 'Dans quel organe les nutriments passent-ils dans le sang ?', multiple: false,
      options: ['Dans l\'intestin grêle', 'Dans l\'œsophage', 'Dans la bouche', 'Dans l\'estomac'], reponses: ['Dans l\'intestin grêle'],
      explication: 'Dans l\'intestin grêle, les nutriments passent dans les vaisseaux sanguins pour nourrir tout le corps.', lecon: '4. Les 5 organes de l\'appareil digestif' },

    { question: 'Trouve l\'intrus : quel aliment n\'est pas un aliment « bâtisseur » ?', multiple: false,
      options: ['Steak haché', 'Fromage blanc', 'Filet de cabillaud', 'Beurre'], reponses: ['Beurre'],
      explication: 'Le beurre est une matière grasse : il donne de l\'énergie. Les trois autres sont bâtisseurs.', lecon: '3. Les 3 rôles des aliments' }
  ]
};
