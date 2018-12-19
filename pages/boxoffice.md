---
layout: default
title: Box Office Collection
permalink: /boxoffice-collection
---
<div class="row fill-page">
  <div class="col-md-8 order-md-1 content">
    <div class="post">
      <div class="post-header">
        <h1 class="post-title">Box Office Collections</h1>
        <hr>
      </div>
      <article class="post-content">
        <ul>
          {% for collection in site.boxoffice %}
            <li><a href="{{collection.url}}">{{collection.title}}</a></li>
          {% endfor %}
        </ul>
      </article>
    </div>
  </div>
  <div class="col-md-2 order-md-0"></div>
  <div class="col-md-2 order-md-2"></div>
</div>
<style>
  .fill-page {height: -webkit-fill-available}
</style>