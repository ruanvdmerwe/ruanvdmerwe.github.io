---
layout: page
title: Spoken language identification
description: End to end system to identify one of six South African languages from the NCHLT dataset.
img: /assets/img/tel_system.png
importance: 2
category: research
---


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/densenet_lwazi_embeddings.png' | relative_url }}" alt="" title="tel-densent"/>
    </div>
</div>
<div class="caption">
    Showing the different representations learned using just Cross-Entropy or Triplet-Loss, versus using the system described that combines both methods into one loss function.
</div>

We presented several methods to improve the generalisation of language identification (LID) systems to
new speakers and to new domains. These methods involved Spectral augmentation, where spectrograms
are masked in the frequency or time bands during training and CNN architectures that are pre-trained
on the Imagenet dataset. The project also introduces the novel (and very simple) Triplet Entropy Loss training method,
which involves training a network simultaneously using Cross Entropy and Triplet loss. It was found
that all three methods improved the generalisation of the models, though not significantly. Even
though the models trained using Triplet Entropy Loss showed a better understanding of the languages
and higher accuracies, it appears as though the models still memorise word patterns present in the
spectrograms rather than learning the finer nuances of a language. The research shows that Triplet
Entropy Loss has great potential and should be investigated further, not only in language identification
tasks but any classification task. More information can be found [here](https://arxiv.org/abs/2012.03775)
