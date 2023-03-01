import React, { Component } from 'react'
import $ from "jquery"
import Card from '../components/Card';

class Gallery extends Component {
    constructor(){
        super();
        this.state = {
            buku : [
                {
                    isbn: "12345",
                    judul: "bulan",
                    penulis: "Tere Liye",
                    penerbit: "CV Harapan Kita",
                    harga: 90000,
                    cover: "https://drive.google.com/uc?id=1ui-jyKgu3DqFyo7VKJu-FFXkaNQN3aSg"
                },
                {
                    isbn: "12346",
                    judul: "bumi",
                    penulis: "Tere Liye",
                    penerbit: "CV Harapan Kita",
                    harga: 80000,
                    cover: "https://drive.google.com/uc?id=1ui-jyKgu3DqFyo7VKJu-FFXkaNQN3aSg"
                },
                {
                    isbn: "12346",
                    judul: "anak badai",
                    penulis: "Tere Liye",
                    penerbit: "CV Harapan Kita",
                    harga: 80000,
                    cover: "https://drive.google.com/uc?id=1ui-jyKgu3DqFyo7VKJu-FFXkaNQN3aSg"
                }
            ],
            action: "",
            isbn: "",
            judul: "",
            penulis: "",
            penerbit: "",
            harga: 0,
            cover: "",
            selectedItem: null,
        }
    }

    render(){
        return (
            <>
            <div className="container">
                <div className="row">
                    { this.state.buku.map( (item, index) => (
                        <Card
                        judul={item.judul}
                        penulis={item.penulis}
                        penerbit={item.penerbit}
                        harga={item.harga}
                        cover={item.cover}
                        onEdit={ () => this.Edit(item)}
                        onDrop={ () => this.Drop(item)}
                        />
                    )) }
                </div>

                <button className="btn btn-success" onClick={() => this.Add()}>
                    Tambah Data
                </button>

                {/* component modal sbg control manipulasi data */}
                <div className="modal" id="modal_buku">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* modal header */}
                            <div className="modal-header">
                                Form Buku
                            </div>

                            {/* modal body */}
                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Judul Buku
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.judul}
                                    onChange={ ev => this.setState({judul: ev.target.value}) }
                                    required />
                                    
                                    Penulis Buku
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.penulis}
                                    onChange={ ev => this.setState({penulis: ev.target.value}) }
                                    required />
                                    
                                    Penerbit Buku
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.penerbit}
                                    onChange={ ev => this.setState({penerbit: ev.target.value}) }
                                    required />
                                    
                                    Harga Buku
                                    <input type="number" className="form-control mb-2"
                                    value={this.state.harga}
                                    onChange={ ev => this.setState({harga: ev.target.value}) }
                                    required />
                                    
                                    Cover Buku
                                    <input type="url" className="form-control mb-2"
                                    value={this.state.cover}
                                    onChange={ ev => this.setState({cover: ev.target.value}) }
                                    required />

                                    <button className="btn btn-info btn-block" type="submit">
                                        Simpan
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Gallery