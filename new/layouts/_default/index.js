var docs = [
{{ range $index, $page := (where .Site.Pages "Section" "docs" "wtf") -}}
  {
    id: {{ $index }},
    title: "{{ .Title }}",
    description: "{{ .Params.description }}",
    href: "{{ .URL | relURL }}"
  },
{{ end -}}
];