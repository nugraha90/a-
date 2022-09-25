---
layout: page
title: Topics
permalink: /topics/
---

<section class="post-list">
  <div class="container">
    {% for tag in site.tags %}
    <h3>{{ tag[0] }}</h3>
    <ul>
        {% for post in tag[1] %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
        {% endfor %}
    </ul>
    {% endfor %}
  </div>

</section>

