AFRAME.registerComponent("poster",{
    init:function(){
        this.placesContainer = this.el
        this.createCards()
    },
    createCards:function(){
        const thumbnails_ref = [
            {
                id : "hulk",
                title : "Hulk",
                url : "../assets/hulk.jpg"
            },
            {
                id : "batman",
                title : "Batman",
                url : "../assets/batman.png"
            },
            {
                id : "spiderman",
                title : "Spiderman",
                url : "../assets/spiderman.jpg"
            },
            {
                id : "wonder_woman",
                title : "Wonder Woman",
                url : "../assets/wonder-woman.jpg"
            },
        ]

        let previous_x = -38
        for (var item of thumbnails_ref){
            const posX = previous_x + 15
            const posY = 0
            const posZ = -20

            const position = {x : posX, y : posY, z : posZ}
            previous_x = posX

            const border_el = this.createBorders(position, item)
            const thumbnails = this.createThumbnails(item)

            border_el.appendChild(thumbnails)
            const title_el = this.createTitles(position, item)
            border_el.appendChild(title_el)
            this.placesContainer.appendChild(border_el)
        }
    },
    createBorders : function(position, id){
        const entity_el = document.createElement("a-entity")

        entity_el.setAttribute("id", id)
        entity_el.setAttribute("position", position)
        entity_el.setAttribute("visible", true)
        entity_el.setAttribute("geometry", {primitive : "box", depth:"1", height : 15, width:"13"})
        entity_el.setAttribute("material", {color : "black", opacity : 0.1})

        return entity_el
    },
    createThumbnails: function(item){
        console.log(item)
        const entity_el = document.createElement("a-entity")
        entity_el.setAttribute("visible", true)
        entity_el.setAttribute("geometry", {primitive : "box", depth:"1", height : 13, width:"10"})
        entity_el.setAttribute("material", {src : item.url})

        return entity_el
    },

    createTitles : function(position, item){
        const entity_el = document.createElement("a-entity")
        entity_el.setAttribute("visible", true)

        const el_position = position
        el_position.y = -17
        entity_el.setAttribute("position", el_position)
        entity_el.setAttribute("text",{
            font : "exo2bold",
            width : 60,
            align : "center",
            color : "black",
            value : item.title
        })

        return entity_el
    }
})