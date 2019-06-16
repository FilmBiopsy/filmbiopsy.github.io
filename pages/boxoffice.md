---
layout: default
title: Box Office Collection
permalink: /boxoffice-collection
---
<div class="row">
  <div class="col-md-8 order-md-1 content">
    <div class="post">
      <div class="post-header">
        <h1 class="post-title">Top Box Office Collections</h1>
        <hr>
      </div>
      <article class="post-content">
          {% assign sorted = site.boxoffice | sort: "total" | reverse%}
          <h2>Top 10 Box Office Collections</h2>
          <ul>
          {% for collection in sorted limit: 10 %}
            {% assign movie = nil %}
            {% for page in site.pages %}
              {% if page.Category == 'Movie' and collection.uid == page.uid %}
                {% assign movie = page %}
                {% break %}
              {% endif %}
            {%endfor %}
            <li>
            <a href="{{collection.url}}">
            {% if movie %}
              {{movie.title}}
            {% else %}
               Not Found
            {% endif %}
            ({{collection.total}} Crores)
            </a>
            </li>
          {% endfor %}
          </ul>
          <hr>
          <h2>Top Box Office Collections in 2019</h2>
          <ul>
          {% for collection in sorted %}
            {% assign movie = nil %}
            {% for page in site.pages %}
              {% if page.Category == 'Movie' and collection.uid == page.uid %}
                {% assign movie = page %}
                {% break %}
              {% endif %}
            {%endfor %}
            {% assign release = movie.release | date: "%Y" %}
            {% if movie == nill or collection.total == nil or  release != '2019' %}
            {% continue %}
            {% endif %}
            <li>
            <a href="{{collection.url}}">
            {% if movie %}
              {{movie.title}}
            {% else %}
               Not Found
            {% endif %}
            ({{collection.total}} Crores)
            </a>
            </li>
          {% endfor %}
          </ul>
      </article>
    </div>
  </div>
  <div class="col-md-2 order-md-0"></div>
  <div class="col-md-2 order-md-2"></div>
</div>