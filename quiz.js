(function () {
  var DATA = window.QUIZ;
  var CLE = 'charles_stats';
  var questions = [], index = 0, score = 0, choix = [], valide = false, erreurs = [];
  var $ = function (id) { return document.getElementById(id); };

  function melanger(t) {
    var a = t.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var x = a[i]; a[i] = a[j]; a[j] = x;
    }
    return a;
  }
  function lireStats() { try { return JSON.parse(localStorage.getItem(CLE)) || {}; } catch (e) { return {}; } }
  function ecrireStats(s) { try { localStorage.setItem(CLE, JSON.stringify(s)); } catch (e) {} }

  function demarrer() {
    questions = DATA.questions.map(function (q) {
      var c = {}; for (var k in q) c[k] = q[k];
      c.options = melanger(q.options);
      return c;
    });
    index = 0; score = 0; erreurs = [];
    $('fin').classList.add('cache');
    $('jeu').classList.remove('cache');
    afficher();
  }

  function afficher() {
    var q = questions[index];
    choix = []; valide = false;
    $('compteur').textContent = 'Question ' + (index + 1) + ' / ' + questions.length;
    $('barre').style.width = (index / questions.length * 100) + '%';
    $('question').textContent = q.question;
    $('consigne').textContent = q.multiple ? 'Plusieurs réponses possibles' : 'Une seule réponse';
    $('explication').classList.add('cache');
    $('btnSuivant').classList.add('cache');
    $('btnValider').classList.remove('cache');
    $('btnValider').disabled = true;
    var zone = $('options'); zone.innerHTML = '';
    q.options.forEach(function (o) {
      var b = document.createElement('button');
      b.className = 'option'; b.textContent = o;
      b.onclick = function () { basculer(b, o); };
      zone.appendChild(b);
    });
  }

  function basculer(b, o) {
    if (valide) return;
    var q = questions[index];
    if (q.multiple) {
      var p = choix.indexOf(o);
      if (p >= 0) { choix.splice(p, 1); b.classList.remove('selectionne'); }
      else { choix.push(o); b.classList.add('selectionne'); }
    } else {
      choix = [o];
      var tous = document.querySelectorAll('.option');
      for (var i = 0; i < tous.length; i++) tous[i].classList.remove('selectionne');
      b.classList.add('selectionne');
    }
    $('btnValider').disabled = choix.length === 0;
  }

  function valider() {
    if (valide) return;
    valide = true;
    var q = questions[index];
    var bonnes = q.reponses;
    var ok = choix.length === bonnes.length && choix.every(function (c) { return bonnes.indexOf(c) >= 0; });
    var tous = document.querySelectorAll('.option');
    for (var i = 0; i < tous.length; i++) {
      var t = tous[i], v = t.textContent;
      t.classList.remove('selectionne'); t.disabled = true;
      var estBonne = bonnes.indexOf(v) >= 0, estChoisie = choix.indexOf(v) >= 0;
      if (estBonne) t.classList.add('bonne');
      else if (estChoisie) t.classList.add('mauvaise');
      else t.classList.add('neutre');
    }
    if (ok) score++; else erreurs.push(q);
    var e = $('explication');
    e.innerHTML = '<strong>' + (ok ? 'Bravo !' : 'Pas tout à fait.') + '</strong> ' + q.explication +
      (ok ? '' : '<br><span class="revoir">À revoir : ' + q.lecon + '</span>');
    e.className = 'explication ' + (ok ? 'ok' : 'ko');
    $('btnValider').classList.add('cache');
    $('btnSuivant').classList.remove('cache');
    $('btnSuivant').textContent = index === questions.length - 1 ? 'Voir mon score' : 'Question suivante';
  }

  function suivante() {
    index++;
    if (index >= questions.length) terminer(); else afficher();
  }

  function terminer() {
    $('jeu').classList.add('cache');
    $('fin').classList.remove('cache');
    $('barre').style.width = '100%';
    var total = questions.length;
    $('score').textContent = score + ' / ' + total;
    var p = score / total;
    var medaille = p >= 0.85 ? '🥇' : p >= 0.65 ? '🥈' : '🥉';
    var msg = p >= 0.85 ? 'Excellent, tu maîtrises !' : p >= 0.65 ? 'Très bien, encore un petit effort.' : 'Relis ta leçon et réessaie !';
    $('medaille').textContent = medaille;
    $('message').textContent = msg;

    var zone = $('aRevoir'); zone.innerHTML = '';
    if (erreurs.length === 0) {
      zone.innerHTML = '<p class="parfait">Aucune erreur : rien à revoir !</p>';
    } else {
      var groupes = {};
      erreurs.forEach(function (q) { groupes[q.lecon] = (groupes[q.lecon] || 0) + 1; });
      var h = '<h3>Les parties de la leçon à revoir</h3><ul>';
      for (var l in groupes) h += '<li><strong>' + l + '</strong> (' + groupes[l] + ' erreur' + (groupes[l] > 1 ? 's' : '') + ')</li>';
      zone.innerHTML = h + '</ul>';
    }

    var s = lireStats();
    var aujourdhui = new Date().toISOString().slice(0, 10);
    s.tests = (s.tests || 0) + 1;
    s.etoiles = (s.etoiles || 0) + score;
    if (s.dernierJour !== aujourdhui) {
      var hier = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      s.serie = (s.dernierJour === hier) ? (s.serie || 0) + 1 : 1;
      s.dernierJour = aujourdhui;
    }
    s.scores = s.scores || {};
    s.scores[DATA.id] = Math.max(s.scores[DATA.id] || 0, score);
    ecrireStats(s);
  }

  $('btnValider').onclick = valider;
  $('btnSuivant').onclick = suivante;
  $('btnRecommencer').onclick = demarrer;
  demarrer();
})();
